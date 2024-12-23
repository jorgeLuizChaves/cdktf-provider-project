// https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs/data-sources/environments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConfluentEnvironmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs/data-sources/environments#id DataConfluentEnvironments#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs/data-sources/environments confluent_environments}
*/
export class DataConfluentEnvironments extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_environments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataConfluentEnvironments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataConfluentEnvironments to import
  * @param importFromId The id of the existing DataConfluentEnvironments that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs/data-sources/environments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataConfluentEnvironments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_environments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs/data-sources/environments confluent_environments} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConfluentEnvironmentsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataConfluentEnvironmentsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'confluent_environments',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.9.0',
        providerVersionConstraint: '~> 2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
