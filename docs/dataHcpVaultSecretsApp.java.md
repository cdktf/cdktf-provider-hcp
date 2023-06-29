# `data_hcp_vault_secrets_app`

Refer to the Terraform Registory for docs: [`data_hcp_vault_secrets_app`](https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/vault_secrets_app).

# `dataHcpVaultSecretsApp` Submodule <a name="`dataHcpVaultSecretsApp` Submodule" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpVaultSecretsApp <a name="DataHcpVaultSecretsApp" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/vault_secrets_app hcp_vault_secrets_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_secrets_app.DataHcpVaultSecretsApp;

DataHcpVaultSecretsApp.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .appName(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.appName">appName</a></code> | <code>java.lang.String</code> | The name of the Vault Secrets application. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/vault_secrets_app#id DataHcpVaultSecretsApp#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.appName"></a>

- *Type:* java.lang.String

The name of the Vault Secrets application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/vault_secrets_app#app_name DataHcpVaultSecretsApp#app_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/vault_secrets_app#id DataHcpVaultSecretsApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_secrets_app.DataHcpVaultSecretsApp;

DataHcpVaultSecretsApp.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_secrets_app.DataHcpVaultSecretsApp;

DataHcpVaultSecretsApp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_secrets_app.DataHcpVaultSecretsApp;

DataHcpVaultSecretsApp.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.secrets">secrets</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.appNameInput">appNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.appName">appName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.secrets"></a>

```java
public StringMap getSecrets();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `appNameInput`<sup>Optional</sup> <a name="appNameInput" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.appNameInput"></a>

```java
public java.lang.String getAppNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.appName"></a>

```java
public java.lang.String getAppName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpVaultSecretsAppConfig <a name="DataHcpVaultSecretsAppConfig" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_secrets_app.DataHcpVaultSecretsAppConfig;

DataHcpVaultSecretsAppConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .appName(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.appName">appName</a></code> | <code>java.lang.String</code> | The name of the Vault Secrets application. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/vault_secrets_app#id DataHcpVaultSecretsApp#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.appName"></a>

```java
public java.lang.String getAppName();
```

- *Type:* java.lang.String

The name of the Vault Secrets application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/vault_secrets_app#app_name DataHcpVaultSecretsApp#app_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/vault_secrets_app#id DataHcpVaultSecretsApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---


